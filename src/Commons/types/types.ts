import container from '@Infrastructures/container';
import { Router } from 'express';

export type Options = {
  router: Router
  container: typeof container
};

export type Routes<T> = Options & {
  handler: T
};