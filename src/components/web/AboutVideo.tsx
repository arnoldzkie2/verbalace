import React from 'react'

interface Props {
    videoSize: {
        width: number
        height: number
    }
}
const AboutVideo: React.FC<Props> = ({ videoSize }) => {
    return (
        <iframe width={videoSize.width} className='w-full rounded-xl' height={videoSize.height} src="https://www.youtube.com/embed/KdQkwAnzgEA" title="Verbalace Introduction" allow="web-share" allowFullScreen></iframe>
    )
}

export default AboutVideo