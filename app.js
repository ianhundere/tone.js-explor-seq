function sequencer() {
    const kick = new Tone.Player('./drums/DoorKick.wav').toMaster();
    const snare = new Tone.Player('./drums/bong3.wav').toMaster();
    index = 0;

    Tone.Transport.scheduleRepeat(repeat, '16n');
    Tone.Transport.start();

    function repeat() {
        let step = index % 16;
        let kickInputs = document.querySelector(
            `.kick input:nth-child(${step + 1})`
        );
        let snareInputs = document.querySelector(
            `.snare input:nth-child(${step + 1})`
        );
        if (kickInputs.checked) {
            kick.start();
        }
        if (snareInputs.checked) {
            snare.start();
        }
        index++;
    }
}

sequencer();
