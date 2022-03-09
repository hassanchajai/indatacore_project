import React from 'react'

const Avatar = ({img,onClick}) => {
    return (
        <div class="w-10 h-10 relative mb-4 z-10" onClick={onClick}>
            <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                <span class="hidden group-hover:table-cell text-black font-bold align-middle select-none">KR</span>
                <img src={img || "https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" }alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
            </div>
        </div>
    )
}

export default Avatar