"use client"

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState); //state sebelum nya (true) diganti menjadi (false)
    }

    const option = {
        width: "300",
        height: "250",
    }
    // Kita pecah stringnya: ambil setelah '/embed/' dan sebelum '?'
    let url = youtubeId.split('/embed/')[1]?.split('?')[0];

    // CARA 1
    const Player = () => {
        return <div className="fixed bottom-2 right-2" >
            <button className="text-primary float-right bg-secondary rounded-full px-2 mb-1" onClick={handleVideoPlayer} >
                X
            </button >
            <YouTube
                videoId={url}
                onReady={(e) => e.target.pauseVideo}
                opts={option}
                onError={() => alert("Video Is Broken Plase Try Again Later")}
            />
        </div >

    }

    const ButtonOpenPlayer = () => {
        return <button className="fixed rounded bg-primary hover:bg-accent text-dark p-2 bottom-2 right-2 transition-all" onClick={handleVideoPlayer}>Tonton Trailer</button>
    }

    return isOpen ? <Player /> : <ButtonOpenPlayer />

    // CARA 2
    // return (
    //     <div className="fixed bottom-2 right-2 z-50">
    //         {isOpen ? (
    //             /* Tampilan Video Player saat Terbuka */
    //             <div>
    //                 <button
    //                     className="text-primary float-right bg-secondary rounded-full px-2 mb-1 hover:text-accent transition-all"
    //                     onClick={handleVideoPlayer}
    //                 >
    //                     X
    //                 </button>
    //                 <YouTube
    //                     videoId={url}
    //                     onReady={(e) => e.target.pauseVideo()}
    //                     opts={option}
    //                     onError={() => alert("Video tidak tersedia")}
    //                 />
    //             </div>
    //         ) : (
    //             /* Tampilan Tombol saat Player Tertutup */
    //             <button
    //                 className="rounded bg-primary hover:bg-accent text-dark p-2 transition-all shadow-lg"
    //                 onClick={handleVideoPlayer}
    //             >
    //                 Tonton Trailer
    //             </button>
    //         )}
    //     </div>
    // )

}

export default VideoPlayer;