import React from 'react'


export default function PlayStoreSection() {

    return (
        <section className="center col">
            <h3 className="text-center">Her yerde öğrenebilirsiniz</h3>
            <div className="flex gap-1 col-xs">
                <a href="https://itunes.apple.com/us/app/quizlet-flashcards-study-tools/id546473125?mt=8">
                    <img className="playstoreimage" src="images/apple_tr.png" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.quizlet.quizletandroid&hl=en&referrer=utm_source%3D">
                    <img className="playstoreimage" src="images/google_play_tr.png" />
                </a>
            </div>
        </section>

    )
}
