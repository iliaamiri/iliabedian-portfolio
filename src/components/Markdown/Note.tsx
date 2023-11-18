import React from 'react';

interface NoteProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'error';
}

export function Note({ children, type = 'info' }: NoteProps) {
  const iconClass =
    type === 'info'
      ? 'text-blue-500'
      : type === 'warning'
        ? 'text-yellow-500'
        : 'text-red-500';

  const bgColor =
    type === 'info'
      ? 'bg-blue-100'
      : type === 'warning'
        ? 'bg-yellow-50'
        : 'bg-red-100';

  const borderColor =
    type === 'info'
      ? 'border-l-blue-300'
      : type === 'warning'
        ? 'border-l-yellow-300'
        : 'border-l-red-300';

  return (
    <div
      className={`my-8 flex items-center justify-start gap-2 rounded-md border-l-8 p-4 ${borderColor} ${bgColor}`}
    >
      <div className='w-full break-words text-gray-800'>{children}</div>
    </div>
  );
}
