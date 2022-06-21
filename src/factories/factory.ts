export abstract class MyFactory<T> {
    abstract create: () => T;
}