import React from 'react'
export interface SayHelloPropsType {
    name: string
}

export const SayHello = ({ name }: SayHelloPropsType) => {
    return (
        <div>hello and i love you{name}!!!!!!</div>
    )
}
