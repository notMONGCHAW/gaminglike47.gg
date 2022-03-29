function checker() {
    var result = confirm('You will be redirected to the old site since this site is still under construction. Are you sure?');
    if (result == false) {
        event.preventDefault();
    }
}
