import { Injectable } from '@angular/core';
import { Student } from '../shared/modules/students.model';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  // private students = new BehaviorSubject<Student[]>([
    // new Student(1, 'Daniel', 'Rivero','dr@habsf', true),
    // new Student(2, 'Sebastian', 'Miloro','sm@uchiga', false),
    // new Student(3, 'Santiago', 'Hero','sh@hotmail', true),
    // new Student(4, 'Karen', 'Rosales','kr@hotmail', false),
    // ]);
    URL = environment.URL;
  // public students$: Observable<Student[]>;
  constructor( private http: HttpClient) {
    // this.students$ = this.students.asObservable()
  }

  // createStudent(newStudentData: Omit<Student, 'id' | 'active'>): void {
  //   this.students.pipe(take(1)).subscribe((students) => {
  //     const lastId = students[students.length - 1]?.id || 0;
  //     this.students.next([
  //       ...students,
  //       new Student(lastId + 1, newStudentData.primernombre, newStudentData.apellido,newStudentData.email, true)
  //     ])
  //   })
  // }

  // editStudent(id: number, data: Partial<Student>): void {
  //   this.students.pipe(take(1)).subscribe((students) => {
  //     this.students.next(
  //       students.map(
  //         (stu) => stu.id === id
  //           ? new Student(
  //             stu.id,
  //             data.primernombre || stu.primernombre,
  //             data.apellido || stu.apellido,
  //             data.email || stu.email,
  //             data.activo || stu.activo,
  //           )
  //           : stu
  //       )
  //     )
  //   })
  // }

  // removeStudent(id: number): void {
  //   this.students.pipe(take(1)).subscribe((students) => {
  //     this.students.next(students.filter((stu) => stu.id !== id))
  //   })
  // }

  // getStudentById(id: number): Observable<Student | null> {
  //   return this.students$.pipe(
  //     take(1),
  //     map((students) => students.find((stu) => stu.id === id) || null)
  //   )
  // }
  public lista(): Observable<Student[]> {
    return this.http.get<Student[]>(this.URL);
  }
  public detalle(id:number): Observable<Student>{
    return this.http.get<Student>(this.URL + `/${id}`);
  }
  
  public guardar(usuarios:Student): Observable<Student> {
    return this.http.post<Student>(this.URL, usuarios);
  
  }
  public delete(id:number): Observable<any>{
    return this.http.delete<any>(this.URL + `/${id}`);
  }
  public update(id:number, usuarios:Student): Observable<any>{
    return this.http.put<any>(this.URL + `/${id}`, usuarios);
  }
}
