import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { User } from './home.model';

export const homeResolver: ResolveFn<User> = () => {
  const state: User = inject(Router).getCurrentNavigation()?.extras.state as User ?? new User();
  return state;
};
