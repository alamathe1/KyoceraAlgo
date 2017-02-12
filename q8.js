function isPossible(a, b, c, d) {

if (a == c && b == d)
return true;
else if (a > c || b > d)
return false;

return (isPossible(a + b, b, c, d) || isPossible(a, a + b, c, d));

}

//isPossible(1, 4, 5, 9);
//isPossible(2,3,21,8);
//isPossible(1, 2, 3, 6);
