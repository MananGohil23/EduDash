import React, { useEffect, useState } from "react";
import {
  FaPlayCircle,
  FaListUl,
  FaTimes,
  FaSpinner,
  FaRegComment,
  FaRegFileAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useSubject } from "../context/SubjectContext";

const SubjectLecturePage = ({ subject }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiUnavailable, setApiUnavailable] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {
    chapter,
    selectedLecture,
    subTopic,
    setSubTopic,
    buttonActive,
    setButtonActive,
    subTopicSidebarActive,
    setSubTopicSidebarActive,
  } = useSubject();

  const isActive = selectedLecture === subject.id;
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const playlistId = chapter ? subject.playlists[chapter] : null;

  useEffect(() => {
    if (!isActive || !chapter || !playlistId) return;

    // Without an API key we can't list sub-topics, but the playlist itself can
    // still be embedded and played, so fall back to that instead of nothing.
    if (!apiKey) {
      setVideos([]);
      setApiUnavailable(true);
      setLoading(false);
      setError(
        "No YouTube API key configured — playing the full chapter playlist instead."
      );
      return;
    }

    let cancelled = false;

    const fetchVideos = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
        );

        const data = await response.json();

        if (cancelled) return;

        if (data.error) {
          setApiUnavailable(true);
          setVideos([]);
          setError(
            "Lecture list is temporarily unavailable — playing the full chapter playlist instead."
          );
          return;
        }

        setApiUnavailable(false);
        setVideos(
          (data.items || []).map((item) => ({
            title: item.snippet.title,
            videoId: item.snippet.resourceId.videoId,
          }))
        );
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setApiUnavailable(true);
          setVideos([]);
          setError(
            "Could not load the lecture list — playing the full chapter playlist instead."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchVideos();

    return () => {
      cancelled = true;
    };
  }, [chapter, isActive, subject, apiKey, playlistId]);

  useEffect(() => {
    setSubTopic(null);
    setButtonActive(null);
  }, [chapter, setSubTopic, setButtonActive]);

  if (!isActive) return null;

  const activeChapterTitle = chapter ? subject.chapters[chapter - 1] : null;
  const description = subject.descriptions[chapter ?? 0];
  const activeVideo = subTopic !== null ? videos[subTopic - 1] : null;
  const playlistFallback = apiUnavailable && playlistId && !activeVideo;

  const selectVideo = (index) => {
    setSubTopic(index + 1);
    setButtonActive(index + 1);
    setDrawerOpen(false);
  };

  const subtopicList = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
        <div className="flex items-center gap-2 text-slate-800">
          <FaListUl className="text-brand-600" />
          <h3 className="font-extrabold">Sub-topics</h3>
        </div>
        <button
          onClick={() => {
            setSubTopicSidebarActive(false);
            setDrawerOpen(false);
          }}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 xl:hidden"
          aria-label="Close sub-topics"
        >
          <FaTimes />
        </button>
        <button
          onClick={() => setSubTopicSidebarActive(false)}
          className="hidden rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 xl:block"
          aria-label="Collapse sub-topics"
        >
          <FaTimes />
        </button>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto p-3">
        {videos.length === 0 && !loading && (
          <p className="px-2 py-6 text-center text-sm text-slate-400">
            {apiUnavailable
              ? "Sub-topic list unavailable — playing the full chapter playlist."
              : "No sub-topics found for this chapter."}
          </p>
        )}

        {videos.map((video, index) => {
          const active = buttonActive === index + 1;
          return (
            <button
              key={index}
              onClick={() => selectVideo(index)}
              className={`flex w-full items-start gap-3 rounded-xl p-3 text-left text-sm transition ${
                active
                  ? "bg-brand-600 text-white shadow-soft"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {index + 1}
              </span>
              <span className="font-semibold leading-snug">{video.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
      <div className="min-w-0 flex-1 space-y-5">
        <div
          className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 shadow-card"
          style={{ aspectRatio: "16 / 9" }}
        >
          {loading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-300">
              <FaSpinner className="h-8 w-8 animate-spin" />
              <span className="text-sm font-semibold">Loading lecture…</span>
            </div>
          ) : activeVideo ? (
            <iframe
              key={activeVideo.videoId}
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${activeVideo.videoId}`}
              title={activeVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : playlistFallback ? (
            <iframe
              key={playlistId}
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
              title={`${subject.name} playlist`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl text-brand-300">
                <FaPlayCircle />
              </span>
              <h3 className="text-lg font-bold text-white">
                {chapter
                  ? "Pick a sub-topic to start watching"
                  : "Select a chapter to begin"}
              </h3>
              <p className="max-w-sm text-sm text-slate-400">
                {chapter
                  ? "Choose a lecture from the sub-topics list to load it here."
                  : `Choose one of the ${subject.name} chapters from the sidebar to load its lectures.`}
              </p>
              <button
                onClick={() => {
                  setSubTopicSidebarActive(true);
                  setDrawerOpen(true);
                }}
                className="mt-2 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 xl:hidden"
              >
                <FaListUl className="h-3.5 w-3.5" />
                Browse sub-topics
              </button>
            </div>
          )}
        </div>

        {error && (
          <div className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-700">
            <FaExclamationTriangle className="shrink-0" />
            {error}
          </div>
        )}

        {chapter && (
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-600">
              {subject.name} · Chapter {chapter}
            </p>
            <h2 className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">
              {activeVideo ? activeVideo.title : activeChapterTitle}
            </h2>
          </div>
        )}

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => setSubTopicSidebarActive(!subTopicSidebarActive)}
            className="hidden items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 shadow-card transition hover:bg-slate-50 xl:inline-flex"
          >
            <FaListUl className="h-3.5 w-3.5" />
            {subTopicSidebarActive ? "Hide sub-topics" : "Show sub-topics"}
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <h3 className="text-lg font-extrabold text-slate-900">Description</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {description}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <div className="flex items-center gap-2 text-slate-800">
            <FaRegFileAlt className="text-brand-600" />
            <h3 className="font-extrabold">Resources</h3>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Notes, references and downloadable material for this chapter will
            appear here soon.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <div className="flex items-center gap-2 text-slate-800">
            <FaRegComment className="text-brand-600" />
            <h3 className="font-extrabold">Comments</h3>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Add a comment…"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
            />
            <button className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700 sm:w-auto">
              Post
            </button>
          </div>
        </div>
      </div>

      {subTopicSidebarActive && (
        <aside className="hidden w-80 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card xl:block">
          <div className="max-h-[calc(100vh-8rem)]">{subtopicList}</div>
        </aside>
      )}

      <div
        className={`fixed inset-0 z-50 xl:hidden ${
          drawerOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!drawerOpen}
      >
        <div
          className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 w-80 max-w-[85%] bg-white shadow-2xl transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {subtopicList}
        </div>
      </div>
    </div>
  );
};

export default SubjectLecturePage;
