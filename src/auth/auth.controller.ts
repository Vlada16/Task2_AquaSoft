import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;

    
    if (username === 'testuser' && password === 'password123') {
      // Return the hardcoded token
      return {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzMzNDc2MzI2LCJleHAiOjE3MzM0Nzk5MjZ9.COtQ-fT31zqYTQMAtKMUbDJV_uIf3gLvj_f4H1b3R48',
      };
    }

    // Invalid credentials
    return { message: 'Invalid credentials' };
  }
}
