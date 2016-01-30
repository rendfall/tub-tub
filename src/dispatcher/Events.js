// Struktura:
//  Źródło (np. GUI)
//      Element (np. PlayButton)
//          Akcja (np. click)

const EVENTS = {

    GUI: {
        PLAYBUTTON: {
            CLICK: 'GUI:PlayButton:click'
        },

        VOLUMERANGE: {
            CHANGE: 'GUI:VolumeRange:change',
            DRAG: 'GUI:VolumeRange:drag',
            CLICK: 'GUI:VolumeRange:click'
        },

        LOADBUTTON: {
            CLICK: 'GUI:LoadButton:click'
        },

        PROGRESSBAR: {
            CHANGE: 'GUI:ProgressBar:change',
            DRAG: 'GUI:ProgressBar:drag'
        },

        LOADINPUT: {
            KEYPRESSED: 'GUI:LoadInput:keypressed'
        }
    },

    CORE: {
        PLAYBUTTON: {
            CLICK: 'CORE:playbutton:click'
        },

        VOLUMERANGE: {
            CHANGE: 'CORE:VolumeRange:change',
            DRAG: 'CORE:VolumeRange:drag',
            CLICK: 'CORE:VolumeRange:click'
        },

        LOADBUTTON: {
            CLICK: 'CORE:LoadButton:click'
        },

        PROGRESSBAR: {
            CHANGE: 'CORE:ProgressBar:change',
            DRAG: 'CORE:ProgressBar:drag'
        }
    }
}

export default EVENTS;
