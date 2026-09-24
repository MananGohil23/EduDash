import React from "react";
import { FaChevronDown, FaChevronUp, FaBookOpen } from "react-icons/fa";
import { useSubject } from "../../context/SubjectContext";
import { SUBJECTS } from "../../subjects/subjectData";
import SubjectLecturePage from "../../subjects/SubjectLecturePage";

const Lectures = () => {
  const {
    chapter,
    setChapter,
    selectedLecture,
    setSelectedLecture,
    setSubTopic,
    setButtonActive,
    setSubTopicSidebarActive,
    dropDown,
    setDropDown,
    chapterActive,
    setChapterActive,
  } = useSubject();

  const activeSubject = SUBJECTS.find((s) => s.id === selectedLecture);

  const selectSubject = (id) => {
    setSelectedLecture(id);

    if (selectedLecture !== id) {
      setChapter(null);
      setSubTopic(null);
      setButtonActive(null);
      setChapterActive(null);
    }

    setDropDown((current) => (current === id ? 0 : id));
  };

  const selectChapter = (index) => {
    setChapter(index + 1);
    setSubTopic(null);
    setButtonActive(null);
    setChapterActive(index + 1);
    setSubTopicSidebarActive(true);
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[20rem_1fr] xl:items-start">
      <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card xl:sticky xl:top-24">
        <div className="flex items-center gap-2 px-2 pb-3 pt-1">
          <FaBookOpen className="text-brand-600" />
          <h2 className="font-extrabold text-slate-900">Subjects</h2>
        </div>

        <div className="space-y-2">
          {SUBJECTS.map((subject) => {
            const selected = selectedLecture === subject.id;
            const expanded = dropDown === subject.id;

            return (
              <div
                key={subject.id}
                className={`overflow-hidden rounded-xl border transition ${
                  selected
                    ? "border-brand-200 bg-brand-50/60"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  onClick={() => selectSubject(subject.id)}
                  className="flex w-full items-center gap-3 px-3 py-3 text-left"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${subject.accent} text-xs font-extrabold text-white`}
                  >
                    {subject.code.slice(0, 3)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block truncate text-sm font-bold ${
                        selected ? "text-brand-700" : "text-slate-800"
                      }`}
                    >
                      {subject.name}
                    </span>
                    <span className="block text-xs text-slate-400">
                      {subject.chapters.length} chapters
                    </span>
                  </span>
                  {expanded ? (
                    <FaChevronUp className="h-3 w-3 text-slate-400" />
                  ) : (
                    <FaChevronDown className="h-3 w-3 text-slate-400" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-1 overflow-y-auto border-t border-slate-100 p-2">
                    {subject.chapters.map((title, index) => {
                      const active = chapterActive === index + 1;
                      return (
                        <button
                          key={index}
                          onClick={() => selectChapter(index)}
                          className={`flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                            active
                              ? "bg-brand-600 text-white"
                              : "text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <span
                            className={`mt-0.5 text-xs font-bold ${
                              active ? "text-white/80" : "text-slate-400"
                            }`}
                          >
                            {index + 1}
                          </span>
                          <span className="font-medium leading-snug">{title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      <div className="min-w-0">
        {!activeSubject ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-card">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-3xl text-brand-500">
              <FaBookOpen />
            </span>
            <h2 className="mt-5 text-xl font-extrabold text-slate-900">
              Select a subject to start learning
            </h2>
            <p className="mt-2 max-w-sm text-sm text-slate-500">
              Choose a subject from the list, pick a chapter, then select a
              sub-topic to load the embedded lecture player.
            </p>
          </div>
        ) : (
          <SubjectLecturePage subject={activeSubject} />
        )}

        {activeSubject && !chapter && (
          <p className="mt-4 text-center text-sm text-slate-400">
            Tip: open a subject's chapters and choose one to load its lectures.
          </p>
        )}
      </div>
    </div>
  );
};

export default Lectures;
