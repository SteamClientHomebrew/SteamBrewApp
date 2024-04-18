"use client"

import { useState, useEffect } from 'react';
import CreateCard from './card';


function GetLatestThemes() {
    const [cards, setCards] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                let buffer = []
                const response = await fetch('https://millennium.web.app/api/v2/');
                const result = await response.json();
        
                const sorted = result.sort((a, b) => (b?.data?.download ?? 0) - (a?.data?.download ?? 0));

                const cardElements = sorted.map((item) => (
                    <CreateCard key={item.id} data={item} />
                ));
                console.log(sorted)

                sorted.forEach(theme => {
                    theme.tags.forEach(tag => {
                        if (!buffer.hasOwnProperty(tag)) {
                            // console.log("added")
                            buffer.push(tag)
                        }
                    })
                });

                setTags(buffer)
                setCards(cardElements);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
  
        fetchData();
    }, []); // Empty dependency array to run the effect once on mount
  
    return { cards, tags };
  }

export default GetLatestThemes;

