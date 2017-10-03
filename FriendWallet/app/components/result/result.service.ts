import { Injectable } from "@angular/core";

import { Result } from "./result";

@Injectable()
export class ResultService {
    // private results = new Array<Result>(
    //     { id: 1, name: "Example Transaction 1", role: "Goalkeeper" },
    //     { id: 3, name: "Example Transaction 2", role: "Defender" },
    //     { id: 4, name: "Example Transaction 3", role: "Midfielder" },
    //     { id: 5, name: "Example Transaction 4", role: "Midfielder" },
    //     { id: 6, name: "Example Transaction 5", role: "Midfielder" },
    //     { id: 7, name: "Example Transaction 6", role: "Midfielder" },
    //     { id: 8, name: "Example Transaction 7", role: "Midfielder" },
    //     { id: 9, name: "Example Transaction 8", role: "Forward" },
    //     { id: 10, name: "Example Transaction 9", role: "Forward" },
    //     { id: 11, name: "Example Transaction 10", role: "Forward" },
    //     { id: 12, name: "Example Transaction 11", role: "Midfielder" },
    //     { id: 13, name: "Example Transaction 12", role: "Goalkeeper" },
    //     { id: 14, name: "Example Transaction 13", role: "Defender" },
    //     { id: 17, name: "Example Transaction 14", role: "Forward" },
    //     { id: 18, name: "Example Transaction 15", role: "Defender" },
    //     { id: 19, name: "Example Transaction 16", role: "Defender" },
    //     { id: 20, name: "Example Transaction 17", role: "Midfielder" },
    //     { id: 21, name: "Example Transaction 18", role: "Midfielder" },
    //     { id: 22, name: "Example Transaction 19", role: "Midfielder" },
    //     { id: 23, name: "Example Transaction 20", role: "Defender" },
    //     { id: 24, name: "Example Transaction 21", role: "Defender" },
    //     { id: 25, name: "Example Transaction 22", role: "Goalkeeper" },
    // );

    private results = new Array<Result>(
        { id: 1, name: "Abe Linc", detail: "A details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: +4.20 },
        { id: 2, name: "Barb John", detail: "B [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 3, name: "Cody Gong", detail: "C [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 4, name: "David Ah", detail: "D [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 5, name: "Einsten Lol ", detail: "E [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 6, name: "Fran C", detail: "F [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 7, name: "George Lo", detail: "G [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 8, name: "Hi Ther", detail: "H [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 9, name: "Jay K", detail: "I [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 10, name: "Lmao :P", detail: "J [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 11, name: "Person 11", detail: "K [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 12, name: "Person 12", detail: "L [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 13, name: "Person 13", detail: "M [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 14, name: "Person 14", detail: "N [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 15, name: "Person 15", detail: "O [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 16, name: "Person 16", detail: "P [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 17, name: "Person 17", detail: "Q [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 18, name: "Person 18", detail: "R [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 19, name: "Person 19", detail: "S [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 20, name: "Person 20", detail: "T [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 21, name: "Person 21", detail: "U [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 22, name: "Person 22", detail: "V [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 23, name: "Person 23", detail: "W [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 24, name: "Person 24", detail: "X [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 25, name: "Person 25", detail: "Y [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
        { id: 26, name: "Person 26", detail: "Z [details go here BLHASDHFLKSHDKSLJ AFKJDSKFJASALKJK]", visibility: false, amount: 4.20 },
    );

    getResults(): Result[] {
        return this.results;
    }

    getResult(id: number): Result {
        return this.results.filter(result => result.id === id)[0];
    }
    getResultBasedOn(name: string): Result {
        return this.results.filter(result => result.name === name)[0];
    }
    getResultsBasedOn(name: string): Result[] {
        return this.results.filter(result => result.name.includes(name));
    }
}
