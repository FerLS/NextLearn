"use client";

import React, { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
    };

    const handleClearClick = () => {
        setInput('');
        setResult(0);
    };

    const handleDeleteClick = () => {
        setInput(prevInput => prevInput.slice(0, -1));
    };

    return (
        <main className='p-10 space-y-10 mx-[600px]'>
            <div className='  border-[8px] border-gray-300 rounded-2xl p-10 h-[500px]'>
                <Input className='mb-10' type="text" value={input} readOnly />
                <div className="grid grid-cols-4 gap-4 flex place-content-stretch  ">
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleNumberClick(1)}>1</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleNumberClick(2)}>2</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleNumberClick(3)}>3</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleOperatorClick('+')}>+</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleNumberClick(4)}>4</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleNumberClick(5)}>5</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleNumberClick(6)}>6</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleOperatorClick('-')}>-</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleNumberClick(7)}>7</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleNumberClick(8)}>8</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleNumberClick(9)}>9</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleOperatorClick('*')}>*</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleClearClick()}>C</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleNumberClick(0)}>0</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleEqualClick()}>=</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleOperatorClick('/')}>/</Button>
                    <Button className="transition hover:invert hover:border-2 duration-200 " onClick={() => handleDeleteClick()}>Delete</Button>
                </div>
            </div>
            <div className='border-[8px] border-gray-300 rounded-2xl p-5'>
                <span className='font-bold text-left'>Result: {result}</span>
            </div>
        </main >
    );
}
