export function LoadingAnimation() {
    return (
        <div className="absolute left-0 h-full w-full bg-blue-100 opacity-30 flex items-center justify-center">
            <span className="animate-ping inline-flex h-10 w-10 rounded-full bg-blue-400 opacity-75"></span>
        </div>
    );
}