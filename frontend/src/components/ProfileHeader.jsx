import { useState, useRef } from "react";
import { LogOutIcon, VolumeOffIcon, Volume2Icon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
function ProfileHeader() {
  const { logout, authUser, updatePorfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const fileInputRef = useRef(null);
  const handleImageUpload = (e) => {};
  return;
  <div className="p-6 border-b border-slate-700/50">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        
        {/* AVATAR IMAGE */}
        <div className="avatar online">

            <input type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload} // className="hidden"
            />
        </div>
        </div>
    </div>
    ProfileHeader
  </div>;
}

export default ProfileHeader;
