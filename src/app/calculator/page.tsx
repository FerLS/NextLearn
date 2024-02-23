"use client";

import React, { useState, useEffect } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Delete } from 'lucide-react';

export default function Calculator() {
    const [result, setResult] = useState<number>(0);
    const [input, setInput] = useState<string>('');

    const handleNumberClick = (number: number) => {
        setInput(prevInput => prevInput + number.toString());
    };

    const handleOperatorClick = (operator: string) => {
        setInput(prevInput => prevInput + operator);
    };

    const handleEqualClick = () => {
        try {
            setResult(eval(input));
        } catch (error) {
            setResult(0);
        }
        setInput('');
    };

    const handleDotClick = () => {
        setInput(prevInput => prevInput + '.');
    };

    const handleClearClick = () => {
        setInput('');
        setResult(0);
    };

    const handleDeleteClick = () => {
        setInput(prevInput => prevInput.slice(0, -1));
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        const key = event.key;
        if (/[0-9+\-*/.=]/.test(key)) {
            event.preventDefault();
            setInput(prevInput => prevInput + key);
        } else if (key === "Backspace") {
            event.preventDefault();
            setInput(prevInput => prevInput.slice(0, -1));
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <main className='p-10 ml-10 flex space-x-10'>
            <div className='border-[8px] border-[--primary] rounded-2xl h-[500px] z-5'>
                <Input
                    className='border-[0px] w-2/3 h-1/5 rounded-br-2xl rounded-t-[0px] rounded-l-[0px] text-secondary ring-[0px] bg-primary font-bold text-3xl'
                    type="text"
                    value={input}
                    readOnly
                />
                <div className="grid grid-cols-4 gap-3 h-4/5 p-10">
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleNumberClick(1)}>1</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleNumberClick(2)}>2</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleNumberClick(3)}>3</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleOperatorClick('+')}>+</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleNumberClick(4)}>4</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleNumberClick(5)}>5</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleNumberClick(6)}>6</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleOperatorClick('-')}>-</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleNumberClick(7)}>7</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleNumberClick(8)}>8</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleNumberClick(9)}>9</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleOperatorClick('*')}>*</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleDotClick()}>.</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl col-start-2" onClick={() => handleNumberClick(0)}>0</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleEqualClick()}>=</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl" onClick={() => handleOperatorClick('/')}>/</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl col-span-2" onClick={() => handleClearClick()}>C</Button>
                    <Button className="transition hover:invert border-2 duration-200 size-18 text-2xl col-span-2 col-start-3" onClick={() => handleDeleteClick()}><Delete /></Button>
                </div>
            </div>
            <div className='border-[8px] border-[--primary] rounded-2xl p-5 h-1/5 w-1/4'>
                <span className='font-bold text-left font-bold text-3xl'>{result}</span>
            </div>
        </main>
    );
}
