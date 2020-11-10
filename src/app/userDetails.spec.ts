// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('HttpClient testing', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      });
  
      // Inject the http service and test controller for each test
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
    /// Tests begin ///
    it('can test HttpClient.get', () => {
        
        console.log("in testing...");
        // Make an HTTP GET request
        httpClient.get<any>('http://jsonplaceholder.typicode.com/users')
          .subscribe(data => {
            // When observable resolves, result should match test data
            console.log("request working: data is" + data);
            expect(data).toEqual("")
        },
        err=> console.log("Error is"+err)
          );
      
        // The following `expectOne()` will match the request's URL.
        // If no requests or multiple requests matched that URL
        // `expectOne()` would throw.
        const req = httpTestingController.expectOne('http://jsonplaceholder.typicode.com/users');
      
        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');
      
        // Respond with mock data, causing Observable to resolve.
        // Subscribe callback asserts that correct data was returned.
        req.flush("");
      
        // Finally, assert that there are no outstanding requests.
        httpTestingController.verify();
      });

      it('can test for 404 error', () => {
        const emsg = 'deliberate 404 error';
      
        httpClient.get('http://jsonplaceholder.typicode.com/users').subscribe(
          data => fail('should have failed with the 404 error'),
          (error: HttpErrorResponse) => {
            expect(error.status).toEqual(404, 'status');
            expect(error.error).toEqual(emsg, 'message');
          }
        );
      
        const req = httpTestingController.expectOne('http://jsonplaceholder.typicode.com/users');
      
        // Respond with mock error
        req.flush(emsg, { status: 404, statusText: 'Not Found' });
      });
  });