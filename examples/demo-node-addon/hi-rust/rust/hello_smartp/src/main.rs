use std::ops::Deref;

struct MyBox<T>(T);
impl<T> Deref for MyBox<T> {
    type Target = T;

    fn deref(&self) -> &T {
        &self.0
    }
}

impl<T> MyBox<T> {
    fn new (x: T) -> MyBox<T> {
        MyBox(x);
    }
}

fn main() {
    let x=5;
    let y= MyBox::new(x);

    assert_eq!(5,x);
    assert_eq!(5, *y);
}