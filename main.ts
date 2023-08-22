basic.forever(function () {
    if (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
        for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole) * 1.5), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        }
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole) * 1.5), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        }
        for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    }
})
