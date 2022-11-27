package dgsw.hs.kr.woojaeboard.repository;

import dgsw.hs.kr.woojaeboard.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Long> {
    List<Post> findByTitleContains(@Param("q")String Title);
}
