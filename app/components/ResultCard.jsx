export default function ResultCard({ result, onRetry }) {
  // result: { cobb_angle, overlay_url, explanation }
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold">Analysis Result</h3>
          <p className="text-sm text-slate-500 mt-1">Automated Cobb angle detection & overlay.</p>

          <div className="mt-4">
            <div className="inline-flex items-baseline gap-2">
              <div className="text-4xl font-extrabold">{(result?.cobb_angle ?? "—").toFixed ? result.cobb_angle.toFixed(2) : result?.cobb_angle ?? "—"}</div>
              <div className="text-slate-500">°</div>
            </div>
            <div className="text-sm text-slate-500 mt-1">Detected Cobb angle</div>
          </div>

          {result?.explanation && (
            <pre className="mt-4 p-3 rounded-md text-sm bg-slate-50 text-slate-700 overflow-auto">{result.explanation}</pre>
          )}

          <div className="mt-4">
            <button onClick={onRetry} className="px-4 py-2 rounded-md bg-slate-100 hover:bg-slate-200">
              Analyze another image
            </button>
          </div>
        </div>

        <div style={{ minWidth: 320 }}>
          {result?.overlay_url ? (
            <img src={result.overlay_url} alt="overlay" style={{ width: "100%", borderRadius: 12, border: "1px solid #eee" }} />
          ) : (
            <div className="h-48 w-full rounded-md bg-slate-50 flex items-center justify-center text-slate-400">
              No overlay available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
