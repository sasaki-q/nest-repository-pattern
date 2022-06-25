export abstract class MyFactory<T> {
    abstract create: <D>(dto: D) => T;
}