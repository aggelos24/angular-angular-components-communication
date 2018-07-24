import { Injectable } from '@angular/core';

import { Data } from '../interfaces/Data';

@Injectable()
export class SharingVariablesService {
  data: Data = {};				//this is the shared variable
}
