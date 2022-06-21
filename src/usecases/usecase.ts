export abstract class MyUsecase<T> {
    abstract getAll: () => Promise<Array<T>>;
}