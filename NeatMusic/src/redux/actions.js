export const changeSong = songList => ({
    type: 'CHANGE',
    songList
})
export const controlPlay = songOrder => ({
    type: 'CONTROL',
    songOrder
})
export const songId = songId => ({
    type: 'ID',
    songId
})
export const songName = songName => ({
    type: 'NAME',
    songName
})
export const singerName = singerName => ({
    type: 'SINGER',
    singerName
})
