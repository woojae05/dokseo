package dgsw.hs.kr.woojaeboard.controller;


import dgsw.hs.kr.woojaeboard.entity.Post;
import dgsw.hs.kr.woojaeboard.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("post")
@RestController
public class PostController {
    @Autowired
    PostRepository postRepository;

    @GetMapping("")
    public List<Post>list(){
        return postRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    @GetMapping("/search")
    public List<Post>searchPost(String q){
        return postRepository.findByTitleContains(q);
    }

    @GetMapping("/{id}")
    public Post getById(@PathVariable Long id){
        Optional<Post> optional = postRepository.findById(id);
        Post post = optional.get();
        Post updateViewPost = Post.builder()
                .id(id)
                .author(post.getAuthor())
                .title(post.getTitle())
                .content(post.getContent())
                .createdTime(post.getCreatedTime())
                .views(post.getViews()+1)
                .build();
        postRepository.save(updateViewPost);
        return updateViewPost;
    }

    @PatchMapping("/{id}")
    public void updatePost(@RequestBody Post post,@PathVariable Long id){
        Post updatePost = Post.builder()
                .id(id)
                .author(post.getAuthor())
                .content(post.getContent())
                .title(post.getTitle())
                .views(post.getViews())
                .createdTime(post.getCreatedTime())
                .build();
        postRepository.save(updatePost);
    }

    @PostMapping("register")
    public void register(@RequestBody  Post post){
        Post newPost =  Post.builder()
                .author(post.getAuthor())
                .content(post.getContent())
                .title(post.getTitle())
                .build();
        postRepository.save(newPost);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id){
        postRepository.deleteById(id);
    }
}
