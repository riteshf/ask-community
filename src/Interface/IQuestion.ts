
import { IAnswer } from './IAnswer'
import { IComment } from './IComment';

export interface IQuestion {
    _id: string,
    title: string,
    content: string,
    createdAt: string,
    lastUpdatedAt: string,
    comments: IComment[],
    answers: IAnswer[],
}

