import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';

class PostDto {
  @ApiProperty({description: '标题'})
  title: string

  @ApiProperty({description: '内容'})
  content: string
}


@Controller('posts')
@ApiTags('post data')
export class PostsController {
  @Get()
  @ApiOperation({summary: '获取全部内容'})
  index() {
    return [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
  }

  @Get(':id')
  @ApiOperation({ summary: '获取详情内容'})
  detail(@Param('id') id: string) {
    return id
  }

  @Post()
  @ApiOperation({summary: '添加内容'})
  create(@Body() body: PostDto) {
    const { title, content} = body
    return {
      title,
      content
    }
  }
}
