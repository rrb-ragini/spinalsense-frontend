"use client";
import { useRef, useState } from "react";

export default function UploadCard({ onFile }) {
  const [drag, setDrag] = useState(false);
  const fileRef = useRef();

  function handleFiles(files) {
    if (!files || !files.length) return;
    onFile(files[0]);
  }

  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold">Upload X-ray</h3>
      <p className="text-sm text-slate-500 mt-1">
        Drag & drop or click to upload a spinal X-ray (AP/PA). We’ll detect scoliosis and show Cobb angle.
      </p>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
          handleFiles(e.dataTransfer.files);
        }}
        className={
          "mt-6 p-6 rounded-xl border-dashed border-2 transition " +
          (drag
            ? "border-primary-500 bg-primary-50"
            : "border-slate-200 bg-white")
        }
        style={{ cursor: "pointer" }}
        onClick={() => fileRef.current?.click()}
      >
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        <div className="flex items-center gap-4">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-primary-500">
            <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.2"/>
          </svg>

          <div>
            <div className="font-medium">Drop X-ray here</div>
            <div className="text-sm text-slate-500">Accepted: JPG, PNG, DICOM exported as image</div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2 justify-end">
        <button
          onClick={() => fileRef.current?.click()}
          className="px-4 py-2 rounded-md bg-primary-500 text-white font-medium hover:bg-primary-700"
        >
          Select file
        </button>
      </div>
    </div>
  );
}
