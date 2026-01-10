import { ShareIcon, TrashIcon, DocumentIcon, VideoIcon, TweetIcon } from "@/icons/Icons";

interface CardProps {
    type: "document" | "video" | "tweet" | "link";
    title: string;
    description: string;
    tags: string[];
    date: string;
}

export const ContentCard = ({ type, title, description, tags, date }: CardProps) => {
    
    // Determine Icon based on type
    const getIcon = () => {
        switch(type) {
            case 'video': return <VideoIcon className="w-5 h-5" />;
            case 'document': return <DocumentIcon className="w-5 h-5" />;
            case 'tweet': return <TweetIcon className="w-5 h-5" />;
            default: return <DocumentIcon className="w-5 h-5" />;
        }
    };

    const getLabel = () => {
        switch(type) {
            case 'video': return 'Tutorial Video';
            case 'document': return 'Project Idea';
            case 'tweet': return 'Tweet';
            default: return 'Project Idea';
        }
    }

    return (
        <div className="bg-white dark:bg-[#0F0F10] border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-[380px] w-full relative group">
            
            {/* Header: Icon + Actions */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium text-lg">
                    {getIcon()}
                    <span>{getLabel()}</span>
                </div>
                <div className="flex gap-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="hover:text-gray-600 dark:hover:text-[#FF7936] transition-colors"><ShareIcon className="w-5 h-5" /></button>
                    <button className="hover:text-red-500 transition-colors"><TrashIcon className="w-5 h-5" /></button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
                {/* Title */}
                <h3 className="font-bold text-2xl mb-4 leading-tight text-black dark:text-[#FF7936] font-isidora">
                    {title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-light">
                    {description}
                </p>
            </div>

            {/* Footer: Tags & Date */}
            <div className="mt-4 space-y-4">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span 
                            key={i} 
                            className="px-3 py-1 rounded-full text-xs font-medium bg-[#E1E4EA] text-gray-700 dark:bg-[#FF7936] dark:text-black"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <p className="text-xs text-gray-400 font-light">
                    Added on {date}
                </p>
            </div>
        </div>
    );
};