import { Button } from "@/components/ui/button";

export function ArtistCard() {
  return (
    <div className="flex items-center gap-4 ">
      {/* Avatar */}
      <img
        src="https://lh3.googleusercontent.com/w5H5wFxyQLVlmcNALQsFXahPlmH9jKaWiVQyVAiiUb5XtidxKyQW7SA_pxld5dHtpenzIqcqeXSnO2k=w120-h120-p-l90-rj"
        alt="Hoà Minzy"
        className="w-24 h-24 rounded-full object-cover"
      />

      {/* Info */}
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-semibold text-white">Hoà Minzy</h2>
        <p className="text-gray-400 text-sm">
          Nghệ sĩ • 21,7 Tr khán thính giả mỗi tháng
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-3">
          <Button variant="secondary" className="rounded-full px-4">
            🔀 Trộn bài
          </Button>
          <Button variant="default" className="rounded-full px-4">
            📡 Đài phát
          </Button>
        </div>
      </div>
    </div>
  );
}
