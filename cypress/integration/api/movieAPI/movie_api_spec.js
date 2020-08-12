describe("testing movie api",()=>{
    it("greeting login",()=>{
        cy.request('https://api.themoviedb.org/3/movie/popular?api_key=9e83a1425b48215d005e8817dc0d95ee&language=en-US&page=1')
        .as('popularMovies');
        cy.get("@popularMovies").should((response)=>{
            if (response.status === 200) {
                expect(response.body.results).to.have.lengthOf(20)
              } else {
                // whatever you want to check here
              }
        })

    })
 
})