import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Redirect,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';

class PostDto {
  @ApiProperty({ description: '标题' })
  title: string;

  @ApiProperty({ description: '内容' })
  content: string;
}

@Controller('posts')
@ApiTags('post data')
export class PostsController {
  @ApiOperation({ summary: '获取全部内容' })
  @Get()
  index() {
    return [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
  }

  @ApiOperation({ summary: '获取详情内容' })
  @Get(':id')
  detail(@Param('id') ids: string) {
    return { msg: `查询的id是：${ids}` };
  }

  @ApiOperation({ summary: '添加内容' })
  @Post()
  create(@Body() body: PostDto) {
    const { title, content } = body;
    return {
      title,
      content,
    };
  }

  @ApiOperation({ summary: '根据id删除' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      msg: `删除的id是：${id}`,
    };
  }

  // 重定向
  /* @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  } */
}
