
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateContentInput {
    slug?: Nullable<string>;
    name?: Nullable<string>;
}

export class UpdateContentInput {
    id: number;
    slug?: Nullable<string>;
    name?: Nullable<string>;
}

export class CreateDogInput {
    name: string;
    ownerId?: Nullable<number>;
}

export class UpdateDogInput {
    id: number;
    name: string;
}

export class CreateOwnerInput {
    name: string;
}

export class UpdateOwnerInput {
    name: string;
}

export class CreateSliceInput {
    contentId: number;
    markdown: string;
    text: string;
    order?: Nullable<number>;
}

export class UpdateSliceInput {
    id: number;
    contentId?: Nullable<number>;
    markdown?: Nullable<string>;
    text?: Nullable<string>;
    order?: Nullable<number>;
}

export class Content {
    id: number;
    slug?: Nullable<string>;
    name?: Nullable<string>;
    slices?: Nullable<Nullable<Slice>[]>;
}

export abstract class IQuery {
    abstract contents(): Nullable<Content>[] | Promise<Nullable<Content>[]>;

    abstract content(id: number): Nullable<Content> | Promise<Nullable<Content>>;

    abstract dogs(): Nullable<Dog>[] | Promise<Nullable<Dog>[]>;

    abstract dog(id: number): Nullable<Dog> | Promise<Nullable<Dog>>;

    abstract owners(): Nullable<Owner>[] | Promise<Nullable<Owner>[]>;

    abstract owner(id: number): Nullable<Owner> | Promise<Nullable<Owner>>;

    abstract slices(): Nullable<Slice>[] | Promise<Nullable<Slice>[]>;

    abstract slice(id: number): Nullable<Slice> | Promise<Nullable<Slice>>;
}

export abstract class IMutation {
    abstract createContent(createContentInput: CreateContentInput): Content | Promise<Content>;

    abstract updateContent(updateContentInput: UpdateContentInput): Content | Promise<Content>;

    abstract removeContent(id: number): Nullable<Content> | Promise<Nullable<Content>>;

    abstract createDog(createDogInput: CreateDogInput): Dog | Promise<Dog>;

    abstract updateDog(updateDogInput: UpdateDogInput): Dog | Promise<Dog>;

    abstract removeDog(id: number): Nullable<Dog> | Promise<Nullable<Dog>>;

    abstract createOwner(createOwnerInput: CreateOwnerInput): Owner | Promise<Owner>;

    abstract updateOwner(updateOwnerInput: UpdateOwnerInput): Owner | Promise<Owner>;

    abstract removeOwner(id: number): Nullable<Owner> | Promise<Nullable<Owner>>;

    abstract createSlice(createSliceInput: CreateSliceInput): Slice | Promise<Slice>;

    abstract updateSlice(updateSliceInput: UpdateSliceInput): Slice | Promise<Slice>;

    abstract removeSlice(id: number): Nullable<Slice> | Promise<Nullable<Slice>>;
}

export class Dog {
    id: number;
    name: string;
}

export class Owner {
    id: number;
    name: string;
    dogs: Nullable<Dog>[];
}

export class Slice {
    id: number;
    contentId?: Nullable<number>;
    content?: Nullable<Content>;
    markdown: string;
    text: string;
    order?: Nullable<number>;
}

type Nullable<T> = T | null;
