export function Warning ({ children, ...props }: { children?: any }) {
    return (
        <div className="flex items-center justify-start gap-2 bg-yellow-50 rounded-md p-4 my-8" {...props}>
            ⚠️
            <div className="text-yellow-900 text-sm">{children}</div>
        </div>
    );
}
