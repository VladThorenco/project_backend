export interface CourseItem {
  id: number;
  title: string;
}

export interface IDataBase {
  courses: CourseItem[]
}

export let db: IDataBase = {
  courses: [
    {id: 1, title: "front-end"},
    {id: 2, title: "back-end"},
    {id: 3, title: "qa"},
    {id: 3, title: "devops"}
  ]
};
