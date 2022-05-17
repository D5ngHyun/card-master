import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CardRepository from '../../service/card_repository';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

function Maker({ authService, FileInput, cardRepository }) {
    const [cards, setCards] = useState({})
    const navigate = useNavigate();
    const locationState = useLocation();
    const [userId, setUserId] = useState(locationState && locationState.state.id);
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        if(!userId){
            return;
        }

        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards)
        });
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid)
            } else {
                navigate('/');
            }
        })
    })


    


    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;

            return updated;
        });

        cardRepository.saveCard(userId, card);
    }
    const deleteCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];

            return updated;
        });

        cardRepository.removeCard(userId, card);
    }


  return (
    <section className={styles.maker}>
        <Header onLogout={onLogout} />
        <div className={styles.container}>
            <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
            <Preview cards={cards} />
        </div>
        <Footer />
    </section>

  )
}

export default Maker