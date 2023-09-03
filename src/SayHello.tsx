import React from 'react'
export interface SayHelloPropsType {
    name: string
}

export const SayHello = ({ name }: SayHelloPropsType) => {
    return (
        <div>hello test{name}!!!!!!</div>
    )
}
