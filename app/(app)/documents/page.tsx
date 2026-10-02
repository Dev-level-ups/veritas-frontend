'use client'
import React, { useState } from 'react';

export default function DocumentsView() {
    // Initialize state with the existing documents
    const [documents, setDocuments] = useState([
        {
            id: 1,
            title: 'Veritas PRD.pdf',
            time: 'Uploaded 2 hours ago',
            pages: 24,
            status: 'Ready',
        },
        {
            id: 2,
            title: 'Architecture Overview.pdf',
            time: 'Uploaded 1 day ago',
            pages: 18,
            status: 'Ready',
        },
        {
            id: 3,
            title: 'Research Paper.pdf',
            time: 'Uploaded 2 days ago',
            pages: 42,
            status: 'Processing',
        },
        {
            id: 4,
            title: 'User Guide.pdf',
            time: 'Uploaded 3 days ago',
            pages: 12,
            status: 'Ready',
        },
    ]);

    // Placeholder function for upload logic
    const handleUpload = () => {
        const newDoc = {
            id: Date.now(), // Generate a temporary unique ID
            title: 'New Uploaded Document.pdf',
            time: 'Uploaded just now',
            pages: 0,
            status: 'Processing',
        };

        // Add the new document to the beginning of the list
        setDocuments([newDoc, ...documents]);
        console.log(documents)
    };

    return (
        <div className="max-w-4xl p-4 md:p-8 bg-white dark:bg-gray-950 font-sans w-full flex flex-col h-full min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Documents</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Upload and manage your PDFs. Ask questions across your documents.
                    </p>
                </div>
                <button
                    onClick={handleUpload}
                    className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Upload PDF
                </button>
            </div>

            {/* Toolbar Section (Search & Filter) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                <div className="relative flex-1">
                    <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search documents..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    />
                </div>

                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    All documents
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            </div>

            {/* Documents List */}
            <div className="flex flex-col gap-3">
                {documents.map((doc) => (
                    <div
                        key={doc.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4 sm:gap-0 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                    >

                        {/* Left side: Icon and Info */}
                        <div className="flex items-center gap-4">
                            {/* PDF Icon SVG */}
                            <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 8C6 5.79086 7.79086 4 10 4H24L34 14V32C34 34.2091 32.2091 36 30 36H10C7.79086 36 6 34.2091 6 32V8Z" className="fill-red-500" />
                                <path d="M24 4V14H34" className="fill-red-600" />
                                <text x="20" y="26" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">PDF</text>
                            </svg>

                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">{doc.title}</span>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">
                                    {doc.time} {doc.pages > 0 && `• ${doc.pages} pages`}
                                </span>
                            </div>
                        </div>

                        {/* Right side: Status Badge and Menu */}
                        <div className="flex items-center gap-4">
                            {doc.status === 'Ready' ? (
                                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-xs font-semibold tracking-wide">
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                    </svg>
                                    Ready
                                </span>
                            ) : (
                                <span className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-lg text-xs font-semibold tracking-wide">
                                    <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                                    </svg>
                                    Processing
                                </span>
                            )}

                            <button className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="5" cy="12" r="1.5"></circle>
                                    <circle cx="12" cy="12" r="1.5"></circle>
                                    <circle cx="19" cy="12" r="1.5"></circle>
                                </svg>
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
