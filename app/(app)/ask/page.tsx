
export default function AskQuestionView() {
    return (
        <div className="flex flex-col min-h-full w-full max-w-4xl mx-auto font-sans relative pb-4 md:pb-8">
            
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 md:p-8 md:pb-4 border-b border-transparent">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1.5 md:mb-2">Ask a question</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">
                        Get answers from your documents with source citations.
                    </p>
                </div>

                <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-lg text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm transition-colors whitespace-nowrap">
                    Veritas PRD
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            </div>

            {/* Chat Container (Flex-1 allows it to grow and push input down if needed, or we use padding) */}
            <div className="flex-1 flex flex-col gap-6 p-4 md:p-8">

                {/* User Message */}
                <div className="flex items-start justify-end gap-2 md:gap-3">
                    <div className="px-4 py-2.5 md:px-5 md:py-3 bg-indigo-50/80 dark:bg-indigo-900/50 text-indigo-900 dark:text-indigo-100 rounded-2xl rounded-tr-sm text-sm md:text-base shadow-sm max-w-[85%] md:max-w-[75%]">
                        How does the retrieval process work in Veritas?
                    </div>
                    <div className="hidden md:flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full text-xs font-semibold shrink-0">
                        JD
                    </div>
                </div>

                {/* AI Message */}
                <div className="flex items-start gap-2 md:gap-4 max-w-[95%] md:max-w-[85%]">
                    {/* AI Avatar */}
                    <div className="items-center justify-center w-8 h-8 hidden md:flex bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg shrink-0 mt-1">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                        </svg>
                    </div>

                    {/* AI Content Bubble */}
                    <div className="flex-1 flex flex-col gap-4 bg-[#f8f9fc] dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl rounded-tl-sm p-4 md:p-5 shadow-sm min-w-0">
                        
                        {/* Text */}
                        <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed wrap-break-word">
                            Veritas performs document retrieval by first converting the user's
                            question into an embedding and searching for semantically similar
                            chunks in a vector database (pgvector). The top candidates (e.g. top 20)
                            are then reranked using a cross-encoder model. The highest-ranked
                            chunks are passed to the LLM for citation-grounded generation, followed
                            by a verification pass to ensure the answer is supported by the retrieved
                            context.
                        </p>

                        {/* Action Buttons (Moved below text for mobile friendliness) */}
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" title="Copy">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                            </button>
                            <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" title="Good Response">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                </svg>
                            </button>
                            <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" title="Bad Response">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-gray-200 dark:bg-gray-800 my-1"></div>

                        {/* Sources Section */}
                        <div>
                            <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-bold text-xs md:text-sm mb-3 uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                    <polyline points="2 12 12 17 22 12"></polyline>
                                    <polyline points="2 17 12 22 22 17"></polyline>
                                </svg>
                                Sources
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {/* Source 1 */}
                                <a href="#" className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 transition-colors group">
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold shrink-0 mt-0.5">
                                        1
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-gray-100 mb-0.5 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Veritas PRD.pdf</h4>
                                        <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 line-clamp-2">"Query: top-k retrieval → Cross-encoder reranking..."</p>
                                    </div>
                                </a>

                                {/* Source 2 */}
                                <a href="#" className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 transition-colors group">
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold shrink-0 mt-0.5">
                                        2
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-gray-100 mb-0.5 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Veritas PRD.pdf</h4>
                                        <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 line-clamp-2">"Chunks embedded and stored in pgvector for semantic search..."</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Input Area (Sticky at the bottom for professional chat feel) */}
            <div className="sticky bottom-4 md:bottom-8 mx-4 md:mx-8 mt-auto">
                {/* Optional subtle gradient to fade text behind input */}
                <div className="absolute -top-6 left-0 right-0 h-6 bg-linear-to-t from-white dark:from-gray-950 to-transparent pointer-events-none"></div>
                
                <div className="flex items-center gap-2 p-1.5 md:p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] focus-within:ring-2 focus-within:ring-indigo-500/50">
                    <input
                        type="text"
                        placeholder="Ask a question about your documents..."
                        className="flex-1 px-4 py-2.5 text-sm md:text-base text-gray-900 dark:text-white bg-transparent placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                    />
                    <button className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-xl transition-all active:scale-95 shrink-0 shadow-sm" title="Send message">
                        <svg className="w-4 h-4 md:w-5 md:h-5 -ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
                <div className="text-center mt-2">
                     <span className="text-[10px] md:text-xs text-gray-400 dark:text-gray-500">Veritas can make mistakes. Check important info.</span>
                </div>
            </div>

        </div>
    );
}
