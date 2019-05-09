import { IComment} from './IComment';

export interface IAnswer {
    _id: string,
    content: string,
    createdAt: string,
    comments: IComment[],
}