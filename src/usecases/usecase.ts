export abstract class MyUsecase<T> {
    // repository
    abstract getAll?: () => Promise<Array<T>>;

    // factory
    abstract create?: () => T;
}