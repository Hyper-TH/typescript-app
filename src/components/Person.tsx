import { useState } from 'react';

// Describe shape of an object
interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean,
    friends: string[],
    // friends: Props[]
    country: Country;   // Becomes optional if country?
};


// Create sort of type that can be a few other options
export enum Country {
    Ireland = "Ireland",
    Philippines = "The Philipines",
    India = "India"
};

export const Person = (props: Props) => {
    // const [name, setName] = useState<string>("");

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person {props.isMarried ? "is" : "is not"} Married</h1>
            {props.friends.map((friend: string) => (
                <h2> {friend} </h2>
            ))}

            <h1>Country: {props.country} </h1>
        </div>
    );
};