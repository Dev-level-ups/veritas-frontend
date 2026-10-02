import React from 'react';

export default function AskQuestionView() {
    return (
        <div className="max-w-4xl p-4 md:p-8 bg-white dark:bg-gray-950 font-sans w-full flex flex-col h-full min-h-screen">

            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Ask a question</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Get answers from your documents with source citations.
                    </p>
                </div>

                <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm transition-colors">
                    All documents (3)
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            </div>

            {/* Chat Container */}
            <div className="flex-1 flex flex-col gap-6 mb-8">

                {/* User Message */}
                <div className="flex items-start justify-end gap-3">
                    <div className="px-5 py-3 bg-indigo-50/80 dark:bg-indigo-900/50 text-indigo-900 dark:text-indigo-100 rounded-2xl rounded-tr-sm text-sm font-medium shadow-sm">
                        How does the retrieval process work in Veritas?
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full text-xs font-semibold flex-shrink-0">
                        JD
                    </div>
                </div>

                {/* AI Message */}
                <div className="flex items-start gap-4">

                    {/* AI Avatar */}
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg flex-shrink-0">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                        </svg>
                    </div>

                    {/* AI Content Bubble */}
                    <div className="flex-1 bg-[#f8f9fc] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl rounded-tl-sm p-5 shadow-sm">

                        {/* Text and Actions */}
                        <div className="flex items-start justify-between gap-4 mb-6">
                            <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                                Veritas performs document retrieval by first converting the user's
                                question into an embedding and searching for semantically similar
                                chunks in a vector database (pgvector). The top candidates (e.g. top 20)
                                are then reranked using a cross-encoder model. The highest-ranked
                                chunks are passed to the LLM for citation-grounded generation, followed
                                by a verification pass to ensure the answer is supported by the retrieved
                                context.
                            </p>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                                <button className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                </button>
                                <button className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                </button>
                                <button className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Sources Section */}
                        <div>
                            <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-bold text-sm mb-3">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                    <polyline points="2 12 12 17 22 12"></polyline>
                                    <polyline points="2 17 12 22 22 17"></polyline>
                                </svg>
                                Sources
                            </div>

                            <div className="flex flex-col gap-2">

                                {/* Source 1 */}
                                <a href="#" className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 transition-colors group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex-shrink-0">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-0.5">Veritas PRD.pdf</h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">"Query: top-k retrieval → Cross-encoder reranking → ..."</p>
                                        </div>
                                    </div>
                                    <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>

                                {/* Source 2 */}
                                <a href="#" className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 transition-colors group">
                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex-shrink-0">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-0.5">Architecture Overview.pdf</h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">"Chunks embedded and stored in pgvector ..."</p>
                                        </div>
                                    </div>
                                    <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="flex items-center gap-2 p-2 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 shadow-sm mt-auto">
                <input
                    type="text"
                    placeholder="Ask a question about your documents..."
                    className="flex-1 px-3 py-2 text-sm text-gray-900 dark:text-white bg-transparent placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                />
                <button className="flex items-center justify-center w-10 h-10 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-lg transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 -ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>

        </div>
    );
}
