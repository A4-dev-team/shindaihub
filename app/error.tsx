"use client";

export default function Error({
    error,
}: {
    error: Error & { digest?: string };
}) {
    return (
        <div>
            <h2>エラーが発生しました。{error.message}</h2>
            <h2>前の画面に戻ってやり直してください。</h2>
        </div>
    );
}
