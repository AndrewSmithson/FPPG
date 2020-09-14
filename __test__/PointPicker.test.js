import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { initializeStore } from '../lib/store'


import PointPicker from '../components/PointPicker'



describe('<PointPicker />', () => {
    let store;
  
    beforeEach(() => {
        store = initializeStore({
            data: {
                players: {
                    '001': {
                        fppg: 5
                    },
                    '002': {
                        fppg: 10
                    },
                    '003': {
                        fppg: 15
                    },
                    '004': {
                        fppg: 20
                    },
                }
            },
            game: {
                maxRounds: 10,
                currentRound: 0,
                roundsCorrect: 0,
                rounds: {
                    0: {
                        options: ['001', '002'],
                        selection: false,
                        correct: false
                    },
                    1: {
                        options: ['003', '004'],
                        selection: false,
                        correct: false
                    }
                },
                flags: {
                    gameStarted: false,
                    gameComplete: false,
                }
            },
        });
    });

    it('it renders and shows 2 options', () => {
        const wrapper = mount(
            <Provider store={store}>
                <PointPicker round={0} />
            </Provider>
        );

        expect(wrapper.find(PointPicker)).toHaveLength(1);
        expect(wrapper.find(PointPicker).children()).toHaveLength(2);
        
    })

    // it('Selection an option dispatches an action', () => {
    //     const wrapper = mount(
    //         <Provider store={store}>
    //             <PointPicker round={0} />
    //         </Provider>
    //     );

    // })

})