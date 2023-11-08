import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { Repository } from '../repository';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user repositories', () => {
    const username = 'testuser';
    const mockRepos: Repository[] = [
      // Mock repository data
    ];

    service.getUserRepos(username, 1, 10).subscribe((repos) => {
      expect(repos).toEqual(mockRepos);
    });

    const req = httpTestingController.expectOne(
      (request) =>
        request.url === 'https://api.github.com/users/testuser/repos' &&
        request.method === 'GET'
    );

    req.flush(mockRepos);
    httpTestingController.verify();
  });
});
